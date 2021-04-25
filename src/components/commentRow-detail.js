import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CommentRowDetail extends Component {
    render() {
        return (
            // <div className="row">
            //     <div className="col-1">
            //         <Link style={{color: 'blue'}} to={`/profile/${this.props.userName}`}>
            //             {this.props.userName}
            //         </Link>
            //     </div>
            //     <div className="col-10">
            //         {this.props.comment}
            //     </div>
            // </div>
           <tr>
               <td>
                   <Link style={{color: 'blue'}} to={`/profile/${this.props.userName}`}>
                       {this.props.userName}
                   </Link>
               </td>
               <td>
                   {this.props.comment}
               </td>
           </tr>



        );
    }
}
export default CommentRowDetail;
