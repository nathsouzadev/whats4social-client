'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { auth } from 'twitter-api-sdk';

export default function UserPage () {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  async function exchangeAuthorizationCodeForAccessToken () {
    const authClient = new auth.OAuth2User({
      client_id: process.env.TWITTER_CLIENT_ID as string,
      client_secret: process.env.TWITTER_CLIENT_SECRET as string,
      callback: 'http://127.0.0.1:3000/user',
      scopes: ['tweet.read', 'tweet.write', 'users.read'],
    });
      
    try {
      const token = await authClient.requestAccessToken(code!);
      console.log(token)
    } catch (error) {
      console.log(error)
    }
  }
    
  return (
    <Suspense>
      <div>
        <h1>User Page</h1>
        <button onClick={exchangeAuthorizationCodeForAccessToken}>Get token</button>
      </div>
    </Suspense>
  );
}
 