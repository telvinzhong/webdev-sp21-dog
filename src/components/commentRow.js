import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./../styles.css";

const CommentRow = (
    {
        deleteComment,
        updateComment,
        user,
        comment
    }) => {
    const [editing, setEditing] = useState(false)
    const [newComment, setNewComment] = useState(title)

    const saveComment = () => {
        setEditing(false)
        const newComment = {
            ...comment,
            comment: newComment
        }
        updateComment(newComment)
    }

  return (
      <tr>
        <td>
            {
                !editing &&
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewComment(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }
        </td>
        <td>{user}</td>

        <td>
            <i onClick={() => deleteComment(comment)} className="fas fa-trash"></i>
            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
            {editing && <i onClick={() => setEditing(false)} className="fas fa-times"></i>}
            {editing && <i onClick={() => saveUser()} className="fas fa-check"></i>}
        </td>
      </tr>
  )
}
export default CommentRow
