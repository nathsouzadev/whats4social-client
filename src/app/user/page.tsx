'use client'

import { auth } from "twitter-api-sdk";

export default function UserPage() {
  const authorizationCode = new URLSearchParams(window.location.search).get('code');
  const authorizationState = new URLSearchParams(window.location.search).get('state');
  console.log(authorizationCode)
  console.log(authorizationState)

  async function exchangeAuthorizationCodeForAccessToken (authorizationCode: any) {
    const authClient = new auth.OAuth2User({
      client_id: process.env.TWITTER_CLIENT_ID as string,
      client_secret: process.env.TWITTER_CLIENT_SECRET as string,
      callback: "http://127.0.0.1:3000/user",
      scopes: ["tweet.read", "users.read"],
    });
      
    try {
      const token = await authClient.requestAccessToken(authorizationCode);
      console.log(token)
    } catch (error) {
      console.log(error)
    }
  }
    
  return (
    <div>
      <h1>User Page</h1>
      <button onClick={exchangeAuthorizationCodeForAccessToken}>Get token</button>
    </div>
  );
}

// 