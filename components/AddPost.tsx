import * as React from "react";
import { IPost } from "../types";
import addPostStyles from "../styles/AddPost.module.scss";

type Props = {
  savePost: (e: React.FormEvent, formData: IPost) => void;
};

const AddPost: React.FC<Props> = ({ savePost }) => {
  const [formData, setFormData] = React.useState<IPost>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form
      className={addPostStyles.Form}
      onSubmit={(e) => savePost(e, formData)}
    >
      <div>
        <div className={addPostStyles.Form_field}>
          <label htmlFor="name">Title</label>
          <input
            className={addPostStyles.Form_field_input}
            onChange={handleForm}
            type="text"
            id="title"
          />
        </div>
        <div className={addPostStyles.Form_field}>
          <label htmlFor="body">Description</label>
          <input
            className={addPostStyles.Form_field_input}
            onChange={handleForm}
            type="text"
            id="body"
          />
        </div>
      </div>
      <button
        className={addPostStyles.Form_button}
        disabled={formData === undefined ? true : false}
      >
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
