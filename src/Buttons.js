function Buttons({anyButtons}) {
    return(
        <div className="cont">
            <button className="change" onClick = {() => anyButtons("стрижка")}>Стрижки</button>
            <button className="change" onClick = {() => anyButtons("покраска")}>Покраска</button>
            <button className="change" onClick = {() => anyButtons("укладка")}>Укладка</button>
            <button className="change" onClick = {() => anyButtons("маникюр")}>Маникюр</button>
        </div>
    )
} 

export default Buttons;