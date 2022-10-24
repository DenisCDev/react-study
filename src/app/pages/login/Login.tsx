export const Login = () => {

    const handleIn = () => {

    }
    
    return (
        <div>
            <form>

                <label>
                    <span>Email</span>
                    <input />
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password"/>
                </label>

                <button type="button" onClick=(handleIn)>
                    Entrar
                </button>
            </form>
        </div>
    );
}
