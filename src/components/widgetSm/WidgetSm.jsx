import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import widgetTitle from "../widgetTitle/widgetTitle";

const newJoin =[
  {
    id:'1', 
    userName:'Anna Keller', 
    userTitle:'Software Engineer',
    imgUrl:'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    id:'2', 
    userName:'Anna Keller', 
    userTitle:'Software Engineer',
    imgUrl:'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    id:'3', 
    userName:'Anna Keller', 
    userTitle:'Software Engineer',
    imgUrl:'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    id:'4', 
    userName:'Anna Keller', 
    userTitle:'Software Engineer',
    imgUrl:'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
  {
    id:'5', 
    userName:'Anna Keller', 
    userTitle:'Software Engineer',
    imgUrl:'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
  },
]

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">New Join Members</h3>
      <widgetTitle />
      <ul className="widgetSmList">
        {
          newJoin.map((item,key)=>{

           return( <li className="widgetSmListItem" key={item.id}>
              <img
                src={item.imgUrl}
                alt={item.userName}
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{item.userName}</span>
                <span className="widgetSmUserTitle">{item.userTitle}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>)
          })
        }
      </ul>
    </div>
  );
}
