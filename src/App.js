import React from "react"
import { Text, View, ScrollView, FlatList } from "react-native";
//import {Button} from "./components/Button";
//import {ButtonLeft, ButtonRight} from "./components/Button"

class App extends React.Component {
  state={
    /*images: [
      'https://yandex.ru/images/search?text=Северный%20Олень&nl=1',
      'https://yandex.ru/images/search?text=Аусси&nl=1',
      'https://yandex.ru/images/search?text=Маруся%20Машина&nl=1',
      'https://yandex.ru/images/search?text=Рябчик&nl=1',
      'https://yandex.ru/images/search?text=Морская%20Черепаха&nl=1'
    ],
    fag: ['1', '2', '3', '4', '5'],
    //id: 0
  };*/

    //count:0
    images: [
    {
      id: 0,
      image: 'https://yandex.ru/images/search?text=Северный%20Олень&nl=1',
      title: "Северный Олень"
    },
    {
      id: 1,
      image: 'https://yandex.ru/images/search?text=Аусси&nl=1',
      title: "Аусси"
    },
    {
      id: 2,
      image: 'https://yandex.ru/images/search?text=Маруся%20Машина&nl=1',
      title: "Маруся"
    },
    {
      id: 3,
      image: 'https://yandex.ru/images/search?text=Рябчик&nl=1',
      title: "Рябчик"
    },
    {
      id: 4,
      image: 'https://yandex.ru/images/search?text=Морская%20Черепаха&nl=1',
      title: "Морская черепаха"
    }
    ]
  };

  /*increase =() => {
    this.setState({count: this.state.count + 1})
  }*/
  /*iterable = () = {
    const newArray = this.state.images.map(foreach)
  }*/
  render() {
    const {images, fag} = this.state;
    const renderItem = ({ item }) => (
      <View key = {url}>
          <Image style={{width:300, height:300}}
            source={{uri:item.rl}}
          />
          <Text>
          {item.title}  
          </Text>
      </View>
    );
    return 
    (
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}
      /*<ScrollView style = {{flex:1}}>
        {images.map((url, name)=>{
          return(
            )
        })}
      </ScrollView>
    )
  }
}
    /*(
      <View
        style={{
          flex: 1, justifyContent: "center", alignItems: "center"
        }}
      >
        <Text>{this.state.count}</Text>
        <Button increase={this.increase}/>
      </View>
    )
  }*/

export default App;
