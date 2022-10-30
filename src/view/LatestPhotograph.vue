<template>
<<<<<<< HEAD
  <h2>Latest Photograph</h2>
</template>

<script>
export default {

}
</script>

<style>

=======
  <HeadLine/>

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

</template>

<script setup>
import HeadLine from '@/components/HeadLine.vue'
  const list = [
      {
          groupingName: 'Latest Photographs',
          id: 1,
          child: [
              {
                  photoName: 'Waves',
                  id: 1,
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
                  photoName: 'The Myth',
                  id: 4
              },
              {
                  photoName: 'The Myth',
                  id: 5
              },
              {
                  photoName: 'The Myth',
                  id: 6
              },
          ]
      },
  ]
  </script>
  
<style lang="less" scoped>
.blog-list {
          text-align: center;
          width: 1300px;
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
                      height: 200px;
                      width: 380px;
                      margin: 10px;
                      background: url(../assets/image1.png);
                      /* padding-bottom: 10px; */
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
>>>>>>> e4ee66fcbfcba5c62ec2056612fb3889802d9f3f
</style>