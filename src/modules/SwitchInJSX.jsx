const SwitchInJSX = () => {
    let isLogged = false;

            switch (isLogged) {
                case true:
                    return <button>Logout btn</button>
                case false:
                    return <button>Loin btn</button>
                default:
                    return null;
            }
        }
export default SwitchInJSX;