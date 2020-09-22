import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as color from '../Color'
import Coupon from './Coupon';
import CouponHistories from './CouponHistories';
const Tab = createMaterialTopTabNavigator();

export default class CouponStack extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    indicatorStyle: {backgroundColor: color.primary},
                    activeTintColor: '#fff',
                    style: { backgroundColor: color.background }
                }}>
                <Tab.Screen name='EnterCoupon' component={Coupon} options={{ tabBarLabel: 'Coupon' }} />
                <Tab.Screen name='CouponHistory' component={CouponHistories} options={{ tabBarLabel: 'History' }} />
                
            </Tab.Navigator>

        )
    }
}