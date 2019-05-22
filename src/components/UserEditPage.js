import React, { Component } from "react"
import { PrimaryButton } from "office-ui-fabric-react/lib/Button"
import { BASE_URL } from "../config"

export class UserEditPage extends Component {
  state = {
    fileURLs: [],
  }

  previewImage = event => {
    const { currentTarget } = event

    this.setState({
      fileURLs: Array.from(currentTarget.files).map(file =>
        URL.createObjectURL(file)
      ),
    })
  }

	updateUser = event => {
    event.preventDefault()
    const { currentTarget: formNode } = event
    const formData = new FormData(formNode)

    fetch(`${BASE_URL}/users/current`, {
      method: "PATCH",
      body: formData,
      credentials: "include",
    })
      .then(r => r.json)
      .then(() => {
        this.props.history.push("/")

        if (typeof this.props.onUserUpdate === "function") {
          this.props.onUserUpdate()
        }
      })
	}
	
  render() {
    const { fileURLs } = this.state

    return (
      <main className="Page">
        <h1>Edit Profile</h1>

        {fileURLs.length > 0 ? (
          <div className="ImagePreviewList">
            {fileURLs.map(fileURL => (
              <img key={fileURL} src={fileURL} />
            ))}
          </div>
        ) : null}

        <form onSubmit={this.updateUser}>
          <div>
            <input
              onChange={this.previewImage}
              type="file"
              name="user[avatars][]" //the array at the end is only necessary if there will be multiple files
              multiple // this prop allows multiple files to be uploaded
            />
          </div>

          <PrimaryButton text="Save Changes" type="Submit" />
        </form>
      </main>
    )
  }
}



