import { execOnce } from "next/dist/shared/lib/utils";

function Tempo(){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return(
        <div>
            {dynamicDateString} (dinâmico)
        </div>
    )
}

export default Tempo;