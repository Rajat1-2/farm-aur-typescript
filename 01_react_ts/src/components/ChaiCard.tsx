
interface ChaiCardProp{
    name:string;
    price:number;
    isspec?:boolean;
}
export function ChaiCard(
    {name,price,isspec=false} : ChaiCardProp
){
    return(
        <article>
            <h2>
                {name} {isspec && <span>$</span>}
            </h2>
            <p>
                {price}
            </p>
        </article>
    );

}