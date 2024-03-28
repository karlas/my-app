import { GetServerSideProps } from 'next'

export default function Page({ pow }: { pow: number }) {
  return <h1>Result: {pow}</h1>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id ? Number(query.id[0]) : 0

  console.log('Calculating complex calculations....', id)

  return {
    props: { pow: id * id },
  }
}
