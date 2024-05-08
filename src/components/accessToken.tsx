import { useSearchParams } from 'next/navigation';
import { auth } from 'twitter-api-sdk';

const GetToken = () => {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  async function exchangeAuthorizationCodeForAccessToken () {
    const authClient = new auth.OAuth2User({
      client_id: process.env.TWITTER_CLIENT_ID as string,
      client_secret: process.env.TWITTER_CLIENT_SECRET as string,
      callback: 'http://127.0.0.1:3000/user',
      scopes: ['tweet.read', 'users.read', 'tweet.write', 'offline.access'],
    });
      
    try {
      const token = await authClient.requestAccessToken(code!);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button onClick={exchangeAuthorizationCodeForAccessToken}>Get token</button>
  )
};

export default GetToken;
