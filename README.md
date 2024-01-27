Navigation is blocked on deployed apps until all parallel route promises resolve for Javascript controlled navigation.
Locally all three methods work as expected 

## SST & Open Next 
https://d35p3rw45jxsw.cloudfront.net/

- [✅] HTML <a> tag
- [❌] Client side `push` using `useRouter` from `next/navigation`
- [❌] Server side `redirect` using `next/navigation`

## Vercel 
https://open-next-streaming.vercel.app/test

- [✅] HTML <a> tag
- [✅] Client side `push` using `useRouter` from `next/navigation`
- [❌] Server side `redirect` using `next/navigation`