'use client'

export default function Home () {
  const consumerKey = process.env.TWITTER_API_KEY
  const redirectUri = process.env.REDIRECT_URI;

  async function redirectToAuthorization () {
    const authorizationUrl = await fetch(`https://api.twitter.com/oauth2/token?response_type=code&client_id=${consumerKey}&redirect_uri=${redirectUri}`, {
      method: 'POST',
    
    });
    console.log('authorizationUrl:', authorizationUrl);
    // window.location.href = authorizationUrl;
  }

  console.log('consumerKey:', consumerKey);

  return (
    <div>
      <p>My twitter app</p>
      <button onClick={redirectToAuthorization}>
        Connect to Twitter
      </button>
    </div>
  );
}
