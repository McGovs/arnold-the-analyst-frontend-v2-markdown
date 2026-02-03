// src/pages/Install.tsx
import { useEffect } from 'react';

export default function Install() {
  useEffect(() => {
    window.location.href =
      'https://slack.com/oauth/v2/authorize?client_id=134528973318.9712045945332&scope=app_mentions:read,channels:history,channels:join,channels:manage,channels:read,channels:write.invites,chat:write,chat:write.public,commands,groups:history,groups:read,im:history,im:read,im:write,mpim:history,users:read&user_scope=';
  }, []);

  // Optional: tiny fallback in case redirect is blocked
  return null;
}
