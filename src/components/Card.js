/* eslint-disable object-curly-newline */
import React, {useState} from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from "../helpers/theme"
import { TouchableOpacity } from 'react-native-gesture-handler';

function Card({ 
  styleCard,
  styleCardContent, 
  styleTitle,
  title, 
  onPress,
}) {

  const [selectedIcon, setFavorite] = useState('check-circle-o');
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity style={styleCard} 
        onPress={() => {
            if(active){
              setFavorite("check-circle-o")
              setActive(false)
            }else {
              setFavorite("check-circle")
              setActive(true)
            }
            }}>
        <Text style={styleTitle}>
            {title}
        </Text>
        <View style={[styleCardContent ,{position: "absolute", right: 10}]} >
            <Icon name={selectedIcon} size={20} color={theme.COLORS.PRIMARY}/>
        </View>
    </TouchableOpacity>
  );
}

Card.defaultProps = {
  styles: {},
  title: '',
  itemId: '',
};

Card.propTypes = {
  styles: PropTypes.any,
  title: PropTypes.string,
  activeIcon: PropTypes.string,
};

export default Card;
