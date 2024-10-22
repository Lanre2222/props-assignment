import "./Blogpost.css"

const Blogpost = ({image,author,date,content,title}) => {
    
    return ( 
        <div className="Blogpost">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{content}</p>
            <p>{date}</p>
        </div>
     );
}
 
export default Blogpost;