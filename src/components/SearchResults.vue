<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    props: ['resultsData'],
    data() {
      let data = this.resultsData;
      let resultType = Object.keys(data[0])
      let newData = []
      //console.log()

      if(resultType == 'artist') {
        data.map(item => {
          let formattedItem = {
            name: item[resultType].name,
            id: item[resultType].id,
            avatar: item[resultType].avatar,
            weburl: item[resultType].weburl
          }
          newData.push(formattedItem)
        })
      } else {
        data.map(item => {
          console.log(resultType);
          let formattedItem = {
            name: item[resultType].title,
            artist: item[resultType].subtitle,
            cover: item[resultType].images.coverart,
            url: item[resultType].url
          }
          newData.push(formattedItem)
        })
      }


      
      return {
        items: newData
      }
    },
  }
</script>