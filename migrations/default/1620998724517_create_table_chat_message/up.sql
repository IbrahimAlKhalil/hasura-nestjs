CREATE TABLE "chat"."message" ("id" serial NOT NULL, "user_id" integer NOT NULL, "conversation_id" integer NOT NULL, "value" text, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("conversation_id") REFERENCES "chat"."conversation"("id") ON UPDATE cascade ON DELETE cascade);
CREATE OR REPLACE FUNCTION "chat"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_chat_message_updated_at"
BEFORE UPDATE ON "chat"."message"
FOR EACH ROW
EXECUTE PROCEDURE "chat"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_chat_message_updated_at" ON "chat"."message" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
