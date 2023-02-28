import Link from "next/link";

const Button = ({name="", className="", link="", onClick=()=>{}}) => {
  const btn = <button className={`w-fit px-4 py-2 text-xl text-white font-normal rounded-lg bg-white bg-opacity-30 hover:bg-opacity-40 transition-all ease-in-out ${className}`} onClick={onClick}>{name}</button>

  if(link.length > 0){
    return <Link href={link} passHref>
      <a target='_blank'>
        {btn}
      </a>
    </Link>
  }
  
  return btn;
}

export default Button