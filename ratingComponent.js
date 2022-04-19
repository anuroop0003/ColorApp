
function spanRating(spanDiv,id,rating)
{
    for(var i = 1; i <= 5; i++)
    {
        var span = document.createElement("span");
        if(i <= rating)
        {
        span.setAttribute("class" ,"fa fa-star checked");
        span.setAttribute("onclick",`changeStar(${i},${id})`);
        }
        else
        {
        span.setAttribute("class" ,"fa fa-star");
        span.setAttribute("onclick",`changeStar(${i},${id})`);
        }
        spanDiv.append(span);
    }
}

function changeStar(tempRating,Id)
{
    colors.forEach((color) => color.id === Id ? color.rating = tempRating : null);
    renderAllColors(colors); 
}