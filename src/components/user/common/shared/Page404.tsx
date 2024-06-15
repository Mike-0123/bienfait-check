import { Link } from "react-router-dom"

const Page404 = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col gap-5">
      <p className="text-2xl">Page was not Found! 🥹</p>
      <Link className="bg-textUserColor text-bgUserColor hover:bg-shineColor px-3 py-2 rounded-md" to='/'>Back to Home</Link>
    </div>
  )
}

export default Page404