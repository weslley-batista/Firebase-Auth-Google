import './styles.scss'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useState } from 'react';

export default function SignIn() {
    const [user, setUser] = useState<User>({} as User)
    const [logado, setLogado] = useState(false);

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider(); //provedor ao qual quero me conectar
        signInWithPopup(auth, provider)
            .then((result) => { setUser(result.user), setLogado(true) })
            .catch((error) => { console.log(error) });
    }

    function handleSignOut(){
        setLogado(false)
    }
    
    return (
        <>
            {logado ? (
                <div className="container">
                    <h1>Autenticação bem sucedida</h1>
                    <p>Dados do usuario:</p>
                    <div className='CardUser'>
                        {user.photoURL && <img src={user.photoURL} alt='Foto do usuario' />}
                        <div>
                            <strong>{user.displayName}</strong>
                            <small>{user.email}</small>
                        </div>
                    </div>
                    <button onClick={handleSignOut}>Deslogar</button>

                </div>
            ) : (
                <div className="container">
                    <h1>Acessar Conta</h1>
                    <p>Faça a autenticação usando sua conta Google</p>
                    <button type="button" className="button" onClick={handleGoogleSignIn}>Autenticar com Google</button>
                </div>
            )}
        </>
    );
}