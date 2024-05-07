'use client'

export default function Home () {
  const consumerKey = process.env.NEXT_PUBLIC_TWITTER_API_KEY
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  function redirectToAuthorization () {
    const authorizationUrl = `https://api.twitter.com/oauth2/authorize?response_type=code&client_id=${consumerKey}&redirect_uri=${redirectUri}`;
    window.location.href = authorizationUrl;
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
