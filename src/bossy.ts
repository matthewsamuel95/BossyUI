import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {BossyCalendar}  from './components/calendar';
import {BossyInput} from './components/input';
import {BossyForm} from './components/form';
import {BossyFormLabel} from './components/form-label';
import {BossyDropdown} from './components/dropdown';
import {BossyDropdownMenuItem} from './components/dropdown-menu';
import {BossyInputError} from './components/input-error';

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule
	],
	declarations: [
		BossyCalendar,
		BossyInput,
		BossyForm,
		BossyFormLabel,
		BossyDropdown,
		BossyDropdownMenuItem,
		BossyInputError

	],
	exports: [
		BossyCalendar,
		BossyInput,
		BossyForm,
		BossyDropdown,
		BossyDropdownMenuItem
	]

})
export class BossyModule {
	static forRoot() {
		return {
			ngModule: BossyModule,
			providers: []
		};
	}
}
