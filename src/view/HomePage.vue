<template>
    <div class="index">
        <div class="top-search">
            <div>
                <div class="top-text">
                    
                </div>
                <div class="input-block">
                    <input type="text" placeholder="Search for photographs">
                </div>
            </div>
        </div>
        <div class="blog-list">
            <div class="blog-list-grouping" v-for="item in list" :key="item.id">
               <div class="grouping-name">
                  {{ item.groupingName }}
               </div>
               <div class="blog-list-main">
                   <div class="blog-list-item" v-for="info in item.child" :key="info.id">
                       <div class="photo-Name">{{ info.photoName }}</div>
                       <div class="read-more">Read More</div>
                   </div>
               </div>
            </div>
        </div>
        <div class="bot-list">
            <div class="featured">
            Since its inception in 1969, Photographic Society of South East Asia has held an annual photography competition for the benefit of the local photographic community. 
            <br>
            Initially known as the International Photographic Salon, it transitioned to its current form, Montage in 1999. 
            <br>
            Since then, Montage has gone from strength to strength, inspiring more aspiring and passionate photographers every year.
            </div>
        </div>
    </div>

    <footer>
      <h2>
        <div>
          <div class="item">Grow with Us</div>
          <div class="item">Business with Us</div>
          <div class="item">Explore</div>
        </div>
        <div class="second">
          <div @click="jumpPage('About')" class="item">About Us</div>
          <div class="item">Owners</div>
          <div class="item">Museums</div>

        </div>
        <div class="second">
          <div class="item">Workshop</div>
          <div class="item">Sponsored Placements</div>
          <div class="item">Exhibitions</div>          
        </div>

      </h2>

      <div>        
        <div>
          <h2>Photographic Society of South East Asia</h2>
        </div>
        <div class="logo-list">
          <img @click="jump3page('https://twitter.com')" src="../assets/image/01ab6619093f45388d66736ec22e5885.png" alt="">
          <img @click="jump3page('http://www.facebook.com')" src="../assets/image/23fd2a2be53141ed810f4d3dcdcd01fa.png" alt="">
          <img @click="jump3page('https://www.instagram.com')" src="../assets/image/81af6121f84c41a5b4391d7d37fce12a.png" alt="">
        </div>
      </div>

    </footer>
  </template>
  
  <script setup>
  const list = [
      {
          groupingName: 'Trending Photography',
          id: 1,
          child: [
              {
                  photoName: 'Waves',
                  id: 1
              },
              {
                  photoName: 'The Sea',
                  id: 2
              },
              {
                  photoName: 'The Myth',
                  id: 3
              },
              {
                  photoName: 'The Bar',
                  id: 4
              }
          ]
      },
      
  
  ]
  </script>
  
  <style lang="less" scoped>
  .index {
      .top-search{
          height: 500px;
          width: 100%;
          background: url(../assets/background0.jpg);
          background-size: cover;
          padding-top: 56px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          .top-text {
              font-family: Helvetica;
              font-size: 30px;
              color: #fff;
              text-align: center;
              font-weight: 400;
              padding-bottom: 20px;
          }
          .input-block {
              width: 400px;
              height: 60px;
              background: rgba(255, 255, 255, 0.5);
              border-radius: 5px;
              border: 1px solid rgb(61, 155, 233);
              display: flex;
              align-items: center;
              padding-right: 50px;
              padding-left: 10px;
          }
          input {
              box-shadow:none;
              outline: none;
              resize: none;
              border: none;
              -webkit-tap-highlight-color:rgba(0,0,0,0);
              background: none;
              font-size: 20px;
              display: block;
              flex: 1
          }
      }
      .blog-list {
          width: 980px;
          margin: 0 auto;
          padding-bottom: 90px;
          .blog-list-grouping {
              .grouping-name {
                  margin: 57px 0 32px 32px;
                  font-size: 36px;
                  letter-spacing: 0 !important;
              }
              .blog-list-main {
                  display: flex;
                  flex-wrap: wrap;
                  .blog-list-item {
                      height: 300px;
                      width: 300px;
                      margin-right: 10px;
                      background: url(../assets/image1.png);
                      // padding-bottom: 10px;
                      padding-top: 178px;
                      padding-left: 30px;
                      color: #fff;
                      flex-shrink: 0;
                      &:nth-child(3n) {
                          margin-right: 0;
                      }
                      .photo-Name {
                          font-size: 30px;
                          font-weight: bold;
                          margin-bottom: 5px;
                      }
                      .read-more {
                          width: 105px;
                          height: 33px;
                          border: 1px solid #fff;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          &:hover {
                              background: #fff;
                              color: #000;
                          }
                      }
                  }
              }
          }
      }
      .bot-list {
          height: 130px;
          background: #f2f2f2;
          display: flex;
          align-items: center;
          > div {
              display: flex;
              width: 980px;
              margin: 0 auto;
              display: flex;
              .featured {
                  align-content: space-around;
                  font-family: Helvetica;
                  border-right: 1px solid #000;
                  padding-left: 0;
              }
              >div {
                  padding: 0 30px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  font-size: 18px;
              }
          }
      }
  }
.content {
    min-height: 100%;
  }
  footer {
    position: relative;
    z-index: 999999;
    padding: 56px calc((100% - 980px) * 0.5);
    padding-bottom: 0;
    background: #f9beaf;
    height: 279px;
    // font-weight: 700;
    letter-spacing: 0.2em;
    h2 {
      > div {
        display: flex;
        padding-bottom: 5px;
        &.second{
          > div.item {
            font-size: 15px !important;
            color: #fff !important;
          }
        }
        > div.item {
          flex-shrink: 0;
          margin-right: 100px;
          width: 287px;
          font-size: 20px;
          color: #fff !important;
          cursor: pointer;
          &:hover {
            color: #000 !important;
          }
        }
      }
    }
    
      h2 {
        font-size: 25px;
        letter-spacing: 0.2em;
        color: #fff;
      }
      .logo-list {
        margin-left: 40px;
        img {
          
          height: 21px;
          width: 21px;
          margin-right: 3px;
        };
        &:hover {
        color: #000 !important;
        cursor: pointer;
        }
      }
    }
  

  </style>