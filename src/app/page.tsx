'use client'

import { authClient } from '@/components/twitter-client';

export default function Home () {
  async function redirectToAuthorization () {
    const STATE = 'my-state';

    const authUrl = authClient.generateAuthURL({
      state: STATE,
      code_challenge_method: 'plain',
      code_challenge: 'test',
    });

    console.log(authUrl)
    window.location.href = authUrl
  }

  return (
    <div>
      <p>My twitter app</p>
      <button onClick={redirectToAuthorization}>
        Connect to Twitter
      </button>
    </div>
  );
}
