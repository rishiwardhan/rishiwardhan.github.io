body{
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    background: #333;
  }
  
  .chart{
    width: 600px;
    height: 300px;
    display: block;
  }
  
  .numbers{
    color: #fff;
    margin: 0;
    padding: 0;
    width: 50px;
    height: 100%;
    display: inline-block;
    float: left;
  }
  
  .numbers li{
    list-style: none;
    height: 150px;
    position: relative;
    bottom: 145px;
  }
  
  .numbers span{
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    right: 10px;
  }
  
  .bars{
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    background: #555;
    margin: 0;
    padding: 0;
    display: inline-block;
    width: 500px;
    height: 300px;
    box-shadow: 0 0 10px 0 #555;
    border-radius: 5px;
  }
  
  .bars li{
    display: table-cell;
    width: 100px;
    height: 300px;
    position: relative;
  }
  
  .bars span{
    width: 100%;
    position: absolute;
    bottom: -30px;
    text-align: center;
  }
  
  .bars .bar{
    display: block;
    background: #17C0EB;
    width: 50px;
    position: absolute;
    bottom: 0;
    margin-left: 25px;
    text-align: center;
    box-shadow: 0 0 10px 0 rgba(23, 192, 235, 0.5);
    transition: 0.5s;
    transition-property: background, box-shadow;
  }
  
  .bars .bar:hover{
    background: #55EFC4;
    box-shadow: 0 0 10px 0 rgba(85, 239, 196, 0.5);
    cursor: pointer;
  }
  
  .bars .bar:before{
    color: #fff;
    content: attr(data-percentage) '%';
    position: relative;
    bottom: 20px;
  }
