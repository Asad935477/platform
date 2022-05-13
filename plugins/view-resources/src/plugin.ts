//
// Copyright © 2020, 2021 Anticrm Platform Contributors.
// Copyright © 2021 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { IntlString, mergeIds } from '@anticrm/platform'
import { AnyComponent } from '@anticrm/ui'
import view, { viewId } from '@anticrm/view'

export default mergeIds(viewId, view, {
  component: {
    ActionsPopup: '' as AnyComponent
  },
  string: {
    MoveClass: '' as IntlString,
    SelectToMove: '' as IntlString,
    Move: '' as IntlString,
    Cancel: '' as IntlString,
    LabelYes: '' as IntlString,
    LabelNo: '' as IntlString,
    LabelNA: '' as IntlString,
    ChooseAColor: '' as IntlString,
    DeleteObject: '' as IntlString,
    DeleteObjectConfirm: '' as IntlString,
    Assignees: '' as IntlString,
    Labels: '' as IntlString,
    WithTime: '' as IntlString,
    Type: '' as IntlString,
    ActionPlaceholder: '' as IntlString,
    CreatingAttribute: '' as IntlString,
    RestoreDefaults: '' as IntlString,
    CreatingAttributeConfirm: '' as IntlString
  }
})
