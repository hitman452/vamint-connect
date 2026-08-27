ALTER TABLE public.member_registrations
  ADD CONSTRAINT chk_member_full_name CHECK (full_name ~ '^[A-Za-z][A-Za-z.\s''-]{1,99}$') NOT VALID,
  ADD CONSTRAINT chk_member_phone_number CHECK (phone_number ~ '^[6-9][0-9]{9}$') NOT VALID,
  ADD CONSTRAINT chk_member_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND length(email) <= 255) NOT VALID,
  ADD CONSTRAINT chk_member_department CHECK (department ~ '^[A-Za-z][A-Za-z\s&.-]{1,99}$') NOT VALID,
  ADD CONSTRAINT chk_member_year CHECK (year_of_study IN ('First Year', 'Second Year', 'Third Year', 'Final Year')) NOT VALID;

ALTER TABLE public.event_registrations
  ADD CONSTRAINT chk_event_full_name CHECK (full_name ~ '^[A-Za-z][A-Za-z.\s''-]{1,99}$') NOT VALID,
  ADD CONSTRAINT chk_event_phone_number CHECK (phone_number ~ '^[6-9][0-9]{9}$') NOT VALID,
  ADD CONSTRAINT chk_event_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND length(email) <= 255) NOT VALID,
  ADD CONSTRAINT chk_event_department CHECK (department ~ '^[A-Za-z][A-Za-z\s&.-]{1,99}$') NOT VALID,
  ADD CONSTRAINT chk_event_year CHECK (year_of_study IN ('First Year', 'Second Year', 'Third Year', 'Final Year')) NOT VALID;

ALTER TABLE public.contact_messages
  ADD CONSTRAINT chk_contact_name CHECK (name ~ '^[A-Za-z][A-Za-z.\s''-]{1,99}$') NOT VALID,
  ADD CONSTRAINT chk_contact_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND length(email) <= 255) NOT VALID,
  ADD CONSTRAINT chk_contact_message_type CHECK (message_type IN ('Suggestion', 'Query', 'Feedback')) NOT VALID,
  ADD CONSTRAINT chk_contact_message_length CHECK (length(message) >= 5 AND length(message) <= 1000) NOT VALID;