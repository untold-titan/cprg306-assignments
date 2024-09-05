import Link from "next/link"

export default function StudentInfo(){
    return (
        <>
            <p>Mitchell Miller</p>
            <Link href={"https://github.com/untold-titan/cprg306-assignments"} style={{textDecoration:"underline"}}>Project Repository</Link>
        </>
    )
}