import { useSearchParams } from 'next/navigation';
import { authClient } from './twitter-client';

const GetToken = () => {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  async function exchangeAuthorizationCodeForAccessToken () {
    try {
      const headers =await  authClient.getAuthHeader()
      console.log(headers)
      const token = await authClient.requestAccessToken(code!);
      console.log(token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button onClick={exchangeAuthorizationCodeForAccessToken}>Get token</button>
  )
};

export default GetToken;
