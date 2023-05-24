import { headers } from 'next/headers';

export default function Subdomain() {
  const headersList = headers();

  const subdomain = headersList.get('host').split('.')[0]

  return  <>Current subdomain: {subdomain}</>;
}
