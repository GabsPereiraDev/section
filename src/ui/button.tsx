
import { Button } from "./style"

interface IButton {
    position: string;
    width: string;
    height: string;
    icon: React.ReactNode;
    onClick: ()=>void;
    margin: string;
}



export function ButtonUI({
    width,height,position, icon, onClick, margin
}:IButton){

  

    return (
        <Button position={position} width={width} height={height} onClick={onClick} margin={margin}>
            {icon}
        </Button>
    )
}

