/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { LocaleDropDown } from '../../../components/Menu/LocaleDropDown'
import { Locale } from '../../../store/locale/types'

// TODO: Investigate
test.skip('should render LocaleDropDown correctly', () => {
  const getLocalesExceptOfSpy = jest.fn(() => [{ code: 'gb', title: 'EN' }])
  const wrapper: ShallowWrapper = shallow(<LocaleDropDown
    getLocalesExceptOf={getLocalesExceptOfSpy}
    locale={{ code: 'ru', title: 'RU' }}
    startSetLocale={null}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(getLocalesExceptOfSpy).toHaveBeenCalledTimes(1)
  expect(getLocalesExceptOfSpy).toHaveBeenCalledWith('ru')
})

// TODO: Investigate
test.skip('should change locale correctly', () => {
  const expectedLocale: Locale = { code: 'ru', title: 'RU' }
  const startSetLocaleSpy = jest.fn()
  const wrapper: ShallowWrapper = shallow(<LocaleDropDown
    getLocalesExceptOf={() => [expectedLocale]}
    locale={{ code: 'ru', title: 'RU' }}
    startSetLocale={startSetLocaleSpy}
  />)
  wrapper.find('*').at(2).simulate('click')
  expect(startSetLocaleSpy).toHaveBeenCalledTimes(1)
  expect(startSetLocaleSpy).toHaveBeenCalledWith(expectedLocale)
})
