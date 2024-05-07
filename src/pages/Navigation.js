import Principal from './src/pages/Principal'; 

<><Stack.Screen name="Principal" options={{headerShown:false}} component={Principal}/> 

<TouchableOpacity 
        style={styles.btnSubmit}
        onPress={()=> navigation.navigate('Principal')}
        >
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>
</>