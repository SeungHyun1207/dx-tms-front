/**
 *  작성일 : 2024-04-15
 *  작성자 : SH.K
 *  내용 : 로그인
 */
import {useState} from "react";

function Login(){

    // id <String> Set
    const [id, setID] = useState<string>('');
    // password <String> Set
    const [password, setPassword] = useState<string>('');

    const handleClickLogin = () =>{

        console.log("setID", setID);
        console.log("setPassword",setPassword);

        console.log(id,password)

    }

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="ID를 입력하세요"
                    onChange={(e) => setID(e.target.value)}
                    onKeyDown={(e)=>{
                        if(e.key=== 'Enter') {
                            handleClickLogin();
                        }
                    }}
                />
                <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    onChange={(e)=> setPassword(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key=== 'Enter') {
                            handleClickLogin();
                        }
                    }}
                />
            </div>
        </>
    )

}

export default Login;