

const Dashboard = () =>{

    const logout = () =>{
        localStorage.clear();
        window.location.reload();
    }
    return(
        <div>
            <h1>TELA DO JOGO</h1>

            <a onClick={logout}>SAIR</a>
        </div>


        
    )
}

export default Dashboard;