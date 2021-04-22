import React, {Component} from 'react';

class CommentRowDetail extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-1">
                    {this.props.userName}
                </div>
                <div className="col-10">
                    {this.props.comment}
                </div>
            </div>

        );
    }
}
export default CommentRowDetail;
