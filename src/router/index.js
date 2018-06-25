// import HelloWorld from '@/components/HelloWorld'
import YfMain from '@/components/YfMain.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import InputCode from '@/components/InputCode.vue'
import ChangeValue from '@/components/ChangeValue.vue'

const routes =
  [
    {
      path: '/',
      name: 'YfMain',
      component: YfMain,
      children: [
        {path: '', name: 'InputCode', component: InputCode},
        {path: 'productdetail', name: 'ProductDetail', component: ProductDetail},
        {path: 'changevalue', name: 'ChangeValue', component: ChangeValue}
      ]
    }
  ]

export default routes
