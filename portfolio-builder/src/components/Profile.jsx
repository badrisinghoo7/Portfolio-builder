import React from "react";

const Profile = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        width: "100%",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          width: "90%",
          height: "500px",
          marginTop: "10px",
          marginLeft: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            width: "90%",
            height: "100px",
            marginTop: "10px",
            marginLeft: "20px",
            background: "lightgray",
          }}
        ></div>
        <div
          style={{
            width: "100px",
            height: "100px",
            border: "1px solid black",
            borderRadius: "50%",
            background: "red",
            marginLeft: "50px",
            marginTop: "-30px",
          }}
        ></div>
        <div
          style={{
            marginLeft: "50px",
          }}
        >
          <h1>Mason Parker</h1>
          <p
            style={{
              color: "gray",
            }}
          >
            Graphic & UI/UX Designer
          </p>
          <p
            style={{
              color: "gray",
            }}
          >
            Denver, United States
          </p>
        </div>

        <div
          style={{
            marginLeft: "50px",
            width: "600px",
            border: "2px dashed gray",
            borderRadius: "10px",
            padding: "2%",
          }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure neque
            harum similique magnam enim iste expedita quae. Sed nemo minima
            obcaecati debitis totam aut labore sapiente laboriosam. Molestiae et
            obcaecati eum quo dicta, ipsa magni laudantium deserunt non eaque
            ipsam labore aperiam id! Ut assumenda harum perspiciatis aliquam ex,
            ipsam provident. Dolor accusantium explicabo eius eum non a facilis
            expedita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
