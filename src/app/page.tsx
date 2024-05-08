'use client'

import { auth } from 'twitter-api-sdk';

export default function Home () {
  async function redirectToAuthorization () {
    const authClient = new auth.OAuth2User({
      client_id: process.env.TWITTER_CLIENT_ID as string,
      client_secret: process.env.TWITTER_CLIENT_SECRET as string,
      callback: 'https://whats4social.vercel.app/user',
      scopes: ['tweet.read', 'users.read', 'tweet.write', 'offline.access'],
    });
    
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
