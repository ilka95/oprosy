import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, FormLayout, Checkbox, Link, FormLayoutGroup, Output, Input, saveAs, $ } from '@vkontakte/vkui';
import { Select, Cell, colors, View, Radio } from '@vkontakte/vkui';


const Home = props => (
	<Panel id={props.id}>
		<PanelHeader>Формы</PanelHeader>
		{props.fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<ListItem
				before={<Avatar src={props.fetchedUser.photo_200}/>}
				description={props.fetchedUser.city.title}
			>
				{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
			</ListItem>

		</Group>}
		<Group id = "colorsZag">
        	    	<div align="center">Вам понравился хакатон?</div>

        	    	<br>
        	    	</br>

        	    	<div align="center">Оставьте свой отзыв о мероприятии.</div>
            </Group>

                  <FormLayout>
                    <div>
                    <div align="center">Качество подготовки мероприятия?</div>

                            	    	<br>
                            	    	</br>
                      <Radio name="radio" value="1" defaultChecked>Отлично</Radio>
                      <Radio name="radio" value="2">Хорошо</Radio>
                      <Radio name="radio" value="3">Удовлетворительно</Radio>
                    </div>
                  </FormLayout>

                  <FormLayout>
                                      <div>
                                      <div align="center">Качество подготовки мероприятия?</div>

                                              	    	<br>
                                              	    	</br>
                                        <Radio name="radio" value="1" defaultChecked>Отлично</Radio>
                                        <Radio name="radio" value="2">Хорошо</Radio>
                                        <Radio name="radio" value="3">Удовлетворительно</Radio>
                                      </div>
                                    </FormLayout>
                                    
              <FormLayout>
                  <FormLayoutGroup top="Фамилия">
                      <Input type="text" defaultValue="knknn" />
                  </FormLayoutGroup>
              </FormLayout>



                  <FormLayout>
                        <Select top="Обычный Select" placeholder="Выберите пол">
                          <option value="m">Мужской</option>
                          <option value="f">Женский</option>
                        </Select>
                      </FormLayout>


                      <button id="save">Cохранить</button>


		<Group title=" ">
			<Div>
				<Button size="xl" level="2" onClick={props.go} data-to="persik">
					Завершить опрос
				</Button>
			</Div>
		</Group>
	</Panel>
);


Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
