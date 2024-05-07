export default function Home () {
  const consumerKey = process.env.TWITTER_API_KEY
  const redirectUri = process.env.REDIRECT_URI;

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
