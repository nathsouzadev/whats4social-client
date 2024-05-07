const UserPage = () => {
  const consumerSecret = process.env.TWITTER_API_SECRET!;
  const consumerKey = process.env.TWITTER_API_KEY!
  const redirectUri = process.env.REDIRECT_URI!;

  const authorizationCode = new URLSearchParams(window.location.search).get('code');

  async function handleAuthorizationResponse () {
    if (authorizationCode) {
      await exchangeAuthorizationCodeForAccessToken(authorizationCode);
    } else {
      console.error('Authorization code not found in URL.');
    }
  }

  async function exchangeAuthorizationCodeForAccessToken (authorizationCode: any) {
    const data = {
      grant_type: authorizationCode,
      code: authorizationCode,
      client_id: consumerKey,
      client_secret: consumerSecret,
      redirect_uri: redirectUri
    };
      
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(data).toString()
    };
      
    fetch('https://api.twitter.com/oauth2/token', options)
      .then(response => response.json())
      .then(data => {
        if (data.access_token) {
          console.log('Access token:', data.access_token);
        } else {
          console.error('Failed to obtain access token:', data.error);
        }
      })
      .catch(error => console.error('Error exchanging authorization code:', error));
  }
    
  return (
    <div>
      <h1>User Page</h1>
      <button onClick={handleAuthorizationResponse}>Get token</button>
    </div>
  );
}

export default UserPage;
