<template>
  <div class="back">
    <div class="container">
      <div class="comments">
        <img class="icon" :src="icon" alt="" srcset="" />
        <div class="users">
          <div class="user">
            <p class="user_comment">
              “I love these guys! They did a great job. I would recommend them
              to anyone.”
            </p>
            <img class="avatar" :src="aka" alt="" srcset="" />
            <p class="user_name">Julius Von Uberstien</p>
          </div>
          <div class="rectangel"></div>
          <div class="user">
            <p class="user_comment">
              “Elexis Corp. has grown immensely with the help of Minimal.”
            </p>
            <img class="avatar" :src="opa" alt="" srcset="" />
            <p class="user_name">Rachel Stamos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import aka from "../assets/aka.jpg";
import opa from "../assets/opa.jpg";
import icon from "../assets/comment_icon.png";
</script>

<style lang="scss" scoped>
.back {
  background: #f5f5f5;
}

.comments {
  padding: 69px 0;
}

.icon {
  margin: 0 auto;
}

.users {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 35px;
}

.user {
  width: 45%;
  padding: 28px 54px;
}

.user_comment {
  color: #333;
  text-align: center;
  font-family: Vollkorn;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px; /* 126.923% */
}

.avatar {
  margin: 24px auto 0 auto;
}

.user_name {
  color: #ababab;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  text-transform: uppercase;
  margin-top: 10px;
}

.rectangel {
  width: 1px;
  height: 150px;
  background: #ababab;
}

@media (max-width: 992px) {
  .user {
    width: 45%;
    padding: 28px 34px;
  }

  .comments {
    padding: 55px 0;
  }

  .users {
    margin-top: 30px;
  }

  .user_name {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
  }

  .rectangel {
    width: 1px;
    height: 200px;
    background: #ababab;
  }
}

@media (max-width: 786px) {
  .comments {
    padding: 45px 0;
  }
  .icon {
    width: 50px;
  }

  .users {
    display: flex;
    justify-content: center;

    margin-top: 25px;
  }

  .user {
    margin-top: 10px;
  width: 75%;
  padding: 23px 40px;
  border: 0.1px solid #dddada;
}

.avatar {
  margin: 15px auto 0 auto;
}

.user_comment {
  font-size: 20px;
  line-height: 23px; /* 126.923% */


}

.user_name {
  font-size: 12px;

}

.rectangel {
display: none;
}
}

@media (max-width: 576px) {
  .comments {
    padding: 35px 0;
  }
  .icon {
    width: 45px;
  }

  .users {
    display: flex;
    justify-content: center;

    margin-top: 25px;
  }

  .user {
    margin-top: 10px;
  width: 75%;
  padding: 20px 35px 15px 35px;
  border: 0.1px solid #dddada;
}

.avatar {
  margin: 15px auto 0 auto;
}

.user_comment {
  font-size: 20px;
  line-height: 23px; /* 126.923% */


}
.user_name {
  font-size: 10px;

}

.rectangel {
display: none;
}
}

@media (max-width: 447px) {
  .comments {
    padding: 35px 0;
  }
  .icon {
    width: 40px;
  }

  .users {
    display: flex;
    justify-content: center;

    margin-top: 20px;
  }

  .user {
    margin-top: 10px;
  width: 75%;
  padding: 15px 25px 10px 25px;
  border: 0.1px solid #dddada;
}

.avatar {
  margin: 10px auto 0 auto;
}

.user_comment {
  font-size: 16px;
  line-height: 20px; /* 126.923% */


}
.user_name {
  font-size: 10px;

}

.rectangel {
display: none;
}
}
</style>
