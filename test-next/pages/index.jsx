import MainContainer from "../components/MainContainer";
import Modal from "react-modal";
import React, { Component } from "react";

// Styles
import styles from "../styles/main.module.scss";

class Index extends React.Component {
  constructor(){
      super();
      this.state = {
          modalIsOpen: false,
          data:{
            url:null,
            comments:[],
            newComment: '',
          },
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }
  
  openModal(id, url) {
    this.setState({modalIsOpen: true, url, id});

    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
                    .then(function (response) {
                      response.json().then(function (data) {
                        this.setState({data});
                      }.bind(this))
                    }.bind(this));
  }

  closeModal() {
      this.setState({modalIsOpen: false});
      this.setState({data:{
            url: null,
            comments:[],

      }});

  }

  submitHandler(event) {
    event.preventDefault();
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/237/comments`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'test name',
        comment: 'test comment',
      }),
    })
      .then((response) => {
        console.log('response', response)
        if (response.status === 204) {
          return new Promise((resolve) => resolve(null))
        }
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then((json) => {
        console.log('Тут хочу получить json, но ничего не приходит', json)
      })
  }         

  renderModal () {
    if(this.state.id){
      return (
        <div className={styles.modal__box}>
        <button className={styles.modal__button} onClick={this.closeModal}>X</button>
        <div className={styles.modal__content}>
          <img src={this.state.data.url} className={styles.modal__img}/>
          <ul className={styles.modal__listComment}>
            {
              this.state.data.comments.map((comment) => {
                return (<li className={styles.modal__listItem}>{comment.text}</li>)
              })
            }
          </ul>
          <form className={styles.modal__form}>
            <textarea className={styles.modal__input}  placeholder="Ваш комментарий"></textarea>
            <button className={styles.modal__buttonSend} onClick={this.submitHandler} type="submit" id="comment-add">Send</button>
          </form>
        </div>
      </div>
      )
    }
  }
  
  render() {
    return(
      <MainContainer>
        <div className={styles.main__container}>
          {this.props.posts.map((post) => {
            return (
              <div className={styles.main__imgBox} key={post.id}>
                <div onClick={() => {
                  this.openModal(post.id, post.url);
                  }}>
                  <img src={post.url} className={styles.main__img}/>
                </div>
              </div>
            );
          })}
          <Modal
            isOpen={this.state.modalIsOpen}
            ariaHideApp={false}
            className={styles.modal}
          >
            {this.renderModal()}
          </Modal>
        </div>
      </MainContainer>
    )
  }
}

export default Index;
export async function getStaticProps(context) {
  const response = await fetch("https://boiling-refuge-66454.herokuapp.com/images");
  const data = await response.json();

  return {
    props: { posts: data },
  };
}


