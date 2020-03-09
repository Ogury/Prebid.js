var app = require('../../../index');

/**
 * This file will have the fixtures for request and response. Each one has to export two functions getRequest and getResponse.
 * expectation directory will hold all the request reponse pairs of different types. middlewares added to the server will parse
 * these files and return the response when expecation is met
 *
 */

/**
 * This function will return the request object with all the entities method, path, body, header etc.
 *
 * @return {object} Request object
 */
exports.getRequest = function() {
  return {
    'httpRequest': {
      'method': 'POST',
      'path': '/',
      'body': {
        'tags': [{
          'sizes': [{
            'width': 640,
            'height': 480
          }],
          'primary_size': {
            'width': 640,
            'height': 480
          },
          'ad_types': ['video'],
          'id': 15394006,
          'allow_smaller_sizes': false,
          'use_pmt_rule': false,
          'prebid': true,
          'disable_psa': true,
          'require_asset_url': true,
          'video': {
            'minduration': 30,
            'maxduration': 30
          }
        }, {
          'sizes': [{
            'width': 640,
            'height': 480
          }],
          'primary_size': {
            'width': 640,
            'height': 480
          },
          'ad_types': ['video'],
          'id': 15394006,
          'allow_smaller_sizes': false,
          'use_pmt_rule': false,
          'prebid': true,
          'disable_psa': true,
          'require_asset_url': true,
          'video': {
            'minduration': 30,
            'maxduration': 30
          }
        }, {
          'sizes': [{
            'width': 640,
            'height': 480
          }],
          'primary_size': {
            'width': 640,
            'height': 480
          },
          'ad_types': ['video'],
          'id': 15394006,
          'allow_smaller_sizes': false,
          'use_pmt_rule': false,
          'prebid': true,
          'disable_psa': true,
          'require_asset_url': true,
          'video': {
            'minduration': 30,
            'maxduration': 30
          }
        }, {
          'sizes': [{
            'width': 640,
            'height': 480
          }],
          'primary_size': {
            'width': 640,
            'height': 480
          },
          'ad_types': ['video'],

          'id': 15394006,
          'allow_smaller_sizes': false,
          'use_pmt_rule': false,
          'prebid': true,
          'disable_psa': true,
          'require_asset_url': true,
          'video': {
            'minduration': 30,
            'maxduration': 30
          }
        }, {
          'sizes': [{
            'width': 640,
            'height': 480
          }],
          'primary_size': {
            'width': 640,
            'height': 480
          },
          'ad_types': ['video'],
          'id': 15394006,
          'allow_smaller_sizes': false,
          'use_pmt_rule': false,
          'prebid': true,
          'disable_psa': true,
          'require_asset_url': true,
          'video': {
            'minduration': 30,
            'maxduration': 30
          }
        }],
        'user': {}
      }
    }
  }
}

/**
 * This function will return the response object with all the entities method, path, body, header etc.
 *
 * @return {object} Response object
 */
exports.getResponse = function() {
  return {
    'httpResponse': {
      'body': {
        'version': '3.0.0',
        'tags': [{
          'uuid': '285a2f41615348',
          'tag_id': 15394006,
          'auction_id': '2837696487158070058',
          'nobid': false,
          'no_ad_url': 'http://sin3-ib.adnxs.com/it?an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Flongform%2Fbasic_w_custom_adserver_translation.html&e=wqT_3QKiCKAiBAAAAwDWAAUBCNSDmPAFEKr2uMu5veGwJxiq5MnUovf28WEqNgkAAAkCABEJBwgAABkJCQjgPyEJCQgAACkRCQAxCQnwaeA_MNbJqwc47UhA7UhIAFAAWJzxW2AAaM26dXgAgAEBigEAkgEDVVNEmAEBoAEBqAEBsAEAuAEDwAEAyAEC0AEA2AEA4AEA8AEAigI8dWYoJ2EnLCAyNTI5ODg1LCAxNTc3NDUxOTg4KTsBHTByJywgMTQ5NDE3OTUxNh8A8P2SArkCIV9EemhKUWlta184UEVOX2ZuMGNZQUNDYzhWc3dBRGdBUUFSSTdVaFExc21yQjFnQVlJSUNhQUJ3QUhnQWdBSElBb2dCN3VZQ2tBRUFtQUVBb0FFQnFBRURzQUVBdVFIdEJLRDJBQUF1UU1FQjdRU2c5Z0FBTGtESkFTbnRDdFVIdU9BXzJRRUFBQUFBQUFEd1AtQUJBUFVCQUFBQUFKZ0NBS0FDQUxVQ0FBQUFBTDBDQUFBQUFPQUNBT2dDQVBnQ0FJQURBWmdEQWFnRHBwUF9EN29EQ1ZOSlRqTTZORGN6TmVBRHJoaUlCQUNRQkFDWUJBSEJCQUFBQQ1yCHlRUQ0KJEFBQU5nRUFQRUUBCwkBMEQ0QkFDSUJmOGtxUVUJE0RBRHdQdy4umgKJASFOdzh1Rnc2PQEkblBGYklBUW9BRBVIVHVRRG9KVTBsT016bzBOek0xUUs0WVMReAxQQV9VEQwMQUFBVx0MAFkdDABhHQwAYx0M8GVlQUEu2AIA4AKtmEjqAmBodHRwOi8vdGVzdC5sb2NhbGhvc3Q6OTk5OS9pbnRlZ3JhdGlvbkV4YW1wbGVzL2xvbmdmb3JtL2Jhc2ljX3dfY3VzdG9tX2Fkc2VydmVyX3RyYW5zbGEBNfDtLmh0bWyAAwCIAwGQAwCYAxegAwGqAwDAA-CoAcgDANgDAOADAOgDAPgDAYAEAJIEDS91dC92My9wcmViaWSYBACiBAsxMC43NS43NC42OagEq8YEsgQSCAEQAhiABSDgAygBKAIwADgDuAQAwAQAyAQA0gQOOTMyNSNTSU4zOjQ3MzXaBAIIAOAEAPAE39-fR4gFAZgFAKAF____________AcAFAMkFAAAAAAAA8D_SBQkJAAAAAAAAAADYBQHgBQHwBay8FPoFBAgAEACQBgGYBgC4BgDBBgAAAAAAAPC_0Ab1L9oGFgoQAAAAAAU3DQFQEAAYAOAGBPIGAggAgAcBiAcAoAdA&s=3414eb9e83df14945d2dbfb00e17fb3f2bad2e33',
          'timeout_ms': 0,
          'ad_profile_id': 1182765,
          'rtb_video_fallback': false,
          'ads': [{
            'content_source': 'rtb',
            'ad_type': 'video',
            'notify_url': 'http://sin3-ib.adnxs.com/vast_track/v2?info=aAAAAAMArgAFAQnUAQZeAAAAABEqO26Z64VhJxnUAQZeAAAAACDf359HKAAw7Ug47UhA0-hISLuv1AFQ1smrB1isvBRiAi0taAFwAXgAgAEBiAEBkAGABZgB4AOgAQCoAd_fn0ewAQE.&s=e5a720a9884e1df845be9c33658ab69f4c56981e&event_type=1',
            'usersync_url': 'http%3A%2F%2Facdn.adnxs.com%2Fdmp%2Fasync_usersync.html',
            'buyer_member_id': 9325,
            'advertiser_id': 2529885,
            'creative_id': 149417951,
            'media_type_id': 4,
            'media_subtype_id': 64,
            'cpm': 15.000010,
            'cpm_publisher_currency': 15.000010,
            'publisher_currency_code': '$',
            'brand_category_id': 33,
            'client_initiated_ad_counting': true,
            'rtb': {
              'video': {
                'player_width': 640,
                'player_height': 480,
                'duration_ms': 30000,
                'playback_methods': ['auto_play_sound_on'],
                'frameworks': ['vpaid_1_0', 'vpaid_2_0'],
                'asset_url': 'http://sin3-ib.adnxs.com/ab?ro=1&an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Flongform%2Fbasic_w_custom_adserver_translation.html&e=wqT_3QL-COh-BAAAAwDWAAUBCNSDmPAFEKr2uMu5veGwJxiq5MnUovf28WEqNgmOWItPAQAuQBGOWItPAQAuQBkAAAECCOA_IREbACkRCQAxARm4AADgPzDWyasHOO1IQO1ISAJQ39-fR1ic8VtgAGjNunV41rgFgAEBigEDVVNEkgEBBvBVmAEBoAEBqAEBsAEAuAEDwAEEyAEC0AEA2AEA4AEA8AEAigI8dWYoJ2EnLCAyNTI5ODg1LCAxNTc3NDUxOTg4KTt1ZigncicsIDE0OTQxNzk1MSwgMTUZH_D9kgK5AiFfRHpoSlFpbWtfOFBFTl9mbjBjWUFDQ2M4VnN3QURnQVFBUkk3VWhRMXNtckIxZ0FZSUlDYUFCd0FIZ0FnQUhJQW9nQjd1WUNrQUVBbUFFQW9BRUJxQUVEc0FFQXVRSHRCS0QyQUFBdVFNRUI3UVNnOWdBQUxrREpBU250Q3RVSHVPQV8yUUVBQUFBQUFBRHdQLUFCQVBVQkFBQUFBSmdDQUtBQ0FMVUNBQUFBQUwwQ0FBQUFBT0FDQU9nQ0FQZ0NBSUFEQVpnREFhZ0RwcFBfRDdvRENWTkpUak02TkRjek5lQURyaGlJQkFDUUJBQ1lCQUhCQkFBQUENcgh5UVENCiRBQUFOZ0VBUEVFAQsJATBENEJBQ0lCZjhrcVFVCRNEQUR3UHcuLpoCiQEhTnc4dUZ3Nj0BJG5QRmJJQVFvQUQVSFR1UURvSlUwbE9Nem8wTnpNMVFLNFlTEXgMUEFfVREMDEFBQVcdDABZHQwAYR0MAGMdDPBlZUFBLtgCAOACrZhI6gJgaHR0cDovL3Rlc3QubG9jYWxob3N0Ojk5OTkvaW50ZWdyYXRpb25FeGFtcGxlcy9sb25nZm9ybS9iYXNpY193X2N1c3RvbV9hZHNlcnZlcl90cmFuc2xhATV8Lmh0bWzyAhMKD0NVU1RPTV9NT0RFTF9JRBIA8gIaChYyFgAgTEVBRl9OQU1FAR0IHgoaNh0ACEFTVAE-8J9JRklFRBIAgAMAiAMBkAMAmAMXoAMBqgMAwAPgqAHIAwDYAwDgAwDoAwD4AwGABACSBA0vdXQvdjMvcHJlYmlkmAQAogQLMTAuNzUuNzQuNjmoBKvGBLIEEggBEAIYgAUg4AMoASgCMAA4A7gEAMAEAMgEANIEDjkzMjUjU0lOMzo0NzM12gQCCAHgBADwBN_fn0eIBQGYBQCgBf______AQUUAcAFAMkFacMU8D_SBQkJCQx4AADYBQHgBQHwBay8FPoFBAgAEACQBgGYBgC4BgDBBgklKPA_0Ab1L9oGFgoQCREZAVAQABgA4AYE8gYCCACABwGIBwCgB0A.&s=99418325b8f5ec79e22c1a9aedd73f03de616c2d'
              }
            }
          }]
        }, {
          'uuid': '285a2f41615348',
          'tag_id': 15394006,
          'auction_id': '8688113570839045503',
          'nobid': false,
          'no_ad_url': 'http://sin3-ib.adnxs.com/it?an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Flongform%2Fbasic_w_custom_adserver_translation.html&e=wqT_3QKhCKAhBAAAAwDWAAUBCNSDmPAFEP_K8rCtqJjJeBiq5MnUovf28WEqNgkAAAkCABEJBwgAABkJCQjgPyEJCQgAACkRCQAxCQnwaeA_MNbJqwc47UhA7UhIAFAAWJzxW2AAaM26dXgAgAEBigEAkgEDVVNEmAEBoAEBqAEBsAEAuAEDwAEAyAEC0AEA2AEA4AEA8AEAigI8dWYoJ2EnLCAyNTI5ODg1LCAxNTc3NDUxOTg4KTsBHTByJywgMTQ5NDE4OTQ4Nh8A8P2SArkCIUN6d3Rud2lta184UEVNVG5uMGNZQUNDYzhWc3dBRGdBUUFSSTdVaFExc21yQjFnQVlJSUNhQUJ3QUhnQWdBSElBb2dCN3VZQ2tBRUFtQUVBb0FFQnFBRURzQUVBdVFIdEJLRDJBQUF1UU1FQjdRU2c5Z0FBTGtESkFWUzRZeVVvR09JXzJRRUFBQUFBQUFEd1AtQUJBUFVCQUFBQUFKZ0NBS0FDQUxVQ0FBQUFBTDBDQUFBQUFPQUNBT2dDQVBnQ0FJQURBWmdEQWFnRHBwUF9EN29EQ1ZOSlRqTTZORGN6TmVBRHJoaUlCQUNRQkFDWUJBSEJCQUFBQQ1yCHlRUQ0KJEFBQU5nRUFQRUUBCwkBMEQ0QkFDSUJmOGtxUVUJE0RBRHdQdy4umgKJASFKQTlsRUE2PQEkblBGYklBUW9BRBVIVHVRRG9KVTBsT016bzBOek0xUUs0WVMReAxQQV9VEQwMQUFBVx0MAFkdDABhHQwAYx0M8GVlQUEu2AIA4AKtmEjqAmBodHRwOi8vdGVzdC5sb2NhbGhvc3Q6OTk5OS9pbnRlZ3JhdGlvbkV4YW1wbGVzL2xvbmdmb3JtL2Jhc2ljX3dfY3VzdG9tX2Fkc2VydmVyX3RyYW5zbGEBNfDXLmh0bWyAAwCIAwGQAwCYAxegAwGqAwDAA-CoAcgDANgDAOADAOgDAPgDAYAEAJIEDS91dC92My9wcmViaWSYBACiBAsxMC43NS43NC42OagEq8YEsgQSCAEQAhiABSDgAygBKAIwADgDuAQAwAQAyAQA0gQOOTMyNSNTSU4zOjQ3MzXaBAIIAOAEAPAExOefR4gFAZgFAKAF____________AcAFAMkFAAAAAAAA8D_SBQkJAAAAAAAAAADYBQHgBQHwBZk9-gUECAAQAJAGAZgGALgGAMEGBSEsAPC_0Ab1L9oGFgoQCREZAVAQABgA4AYE8gYCCACABwGIBwCgB0A.&s=2e7c9d18300402e2e183667711728f7743b70a2b',
          'timeout_ms': 0,
          'ad_profile_id': 1182765,
          'rtb_video_fallback': false,
          'ads': [{
            'content_source': 'rtb',
            'ad_type': 'video',
            'notify_url': 'http://sin3-ib.adnxs.com/vast_track/v2?info=ZwAAAAMArgAFAQnUAQZeAAAAABF_pRzWQmGSeBnUAQZeAAAAACDE559HKAAw7Ug47UhA0-hISLuv1AFQ1smrB1iZPWICLS1oAXABeACAAQGIAQGQAYAFmAHgA6ABAKgBxOefR7ABAQ..&s=febf12010c66ac7247f571f03c33175ca9036b32&event_type=1',
            'usersync_url': 'http%3A%2F%2Facdn.adnxs.com%2Fdmp%2Fasync_usersync.html',
            'buyer_member_id': 9325,
            'advertiser_id': 2529885,
            'creative_id': 149418948,
            'media_type_id': 4,
            'media_subtype_id': 64,
            'cpm': 15.000010,
            'cpm_publisher_currency': 15.000010,
            'publisher_currency_code': '$',
            'brand_category_id': 1,
            'client_initiated_ad_counting': true,
            'rtb': {
              'video': {
                'player_width': 640,
                'player_height': 480,
                'duration_ms': 30000,
                'playback_methods': ['auto_play_sound_on'],
                'frameworks': ['vpaid_1_0', 'vpaid_2_0'],
                'asset_url': 'http://sin3-ib.adnxs.com/ab?ro=1&an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Flongform%2Fbasic_w_custom_adserver_translation.html&e=wqT_3QL9COh9BAAAAwDWAAUBCNSDmPAFEP_K8rCtqJjJeBiq5MnUovf28WEqNgmOWItPAQAuQBGOWItPAQAuQBkAAAECCOA_IREbACkRCQAxARm4AADgPzDWyasHOO1IQO1ISAJQxOefR1ic8VtgAGjNunV41rgFgAEBigEDVVNEkgEBBvBVmAEBoAEBqAEBsAEAuAEDwAEEyAEC0AEA2AEA4AEA8AEAigI8dWYoJ2EnLCAyNTI5ODg1LCAxNTc3NDUxOTg4KTt1ZigncicsIDE0OTQxODk0OCwgMTUZH_D9kgK5AiFDend0bndpbWtfOFBFTVRubjBjWUFDQ2M4VnN3QURnQVFBUkk3VWhRMXNtckIxZ0FZSUlDYUFCd0FIZ0FnQUhJQW9nQjd1WUNrQUVBbUFFQW9BRUJxQUVEc0FFQXVRSHRCS0QyQUFBdVFNRUI3UVNnOWdBQUxrREpBVlM0WXlVb0dPSV8yUUVBQUFBQUFBRHdQLUFCQVBVQkFBQUFBSmdDQUtBQ0FMVUNBQUFBQUwwQ0FBQUFBT0FDQU9nQ0FQZ0NBSUFEQVpnREFhZ0RwcFBfRDdvRENWTkpUak02TkRjek5lQURyaGlJQkFDUUJBQ1lCQUhCQkFBQUENcgh5UVENCiRBQUFOZ0VBUEVFAQsJATBENEJBQ0lCZjhrcVFVCRNEQUR3UHcuLpoCiQEhSkE5bEVBNj0BJG5QRmJJQVFvQUQVSFR1UURvSlUwbE9Nem8wTnpNMVFLNFlTEXgMUEFfVREMDEFBQVcdDABZHQwAYR0MAGMdDPBlZUFBLtgCAOACrZhI6gJgaHR0cDovL3Rlc3QubG9jYWxob3N0Ojk5OTkvaW50ZWdyYXRpb25FeGFtcGxlcy9sb25nZm9ybS9iYXNpY193X2N1c3RvbV9hZHNlcnZlcl90cmFuc2xhATV8Lmh0bWzyAhMKD0NVU1RPTV9NT0RFTF9JRBIA8gIaChYyFgAgTEVBRl9OQU1FAR0IHgoaNh0ACEFTVAE-8J9JRklFRBIAgAMAiAMBkAMAmAMXoAMBqgMAwAPgqAHIAwDYAwDgAwDoAwD4AwGABACSBA0vdXQvdjMvcHJlYmlkmAQAogQLMTAuNzUuNzQuNjmoBKvGBLIEEggBEAIYgAUg4AMoASgCMAA4A7gEAMAEAMgEANIEDjkzMjUjU0lOMzo0NzM12gQCCAHgBADwBMTnn0eIBQGYBQCgBf______AQUUAcAFAMkFacMU8D_SBQkJCQx0AADYBQHgBQHwBZk9-gUECAAQAJAGAZgGALgGAMEGCSQo8D_QBvUv2gYWChAJERkBUBAAGADgBgTyBgIIAIAHAYgHAKAHQA..&s=92aa9e9c89384c435ab9c7fa62b963d8fc087ef7'
              }
            }
          }]
        }, {
          'uuid': '285a2f41615348',
          'tag_id': 15394006,
          'auction_id': '4162295099171231907',
          'nobid': false,
          'no_ad_url': 'http://sin3-ib.adnxs.com/it?an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Flongform%2Fbasic_w_custom_adserver_translation.html&e=wqT_3QKhCKAhBAAAAwDWAAUBCNSDmPAFEKOxzaPwqtzhORiq5MnUovf28WEqNgkAAAkCABEJBwgAABkJCQjgPyEJCQgAACkRCQAxCQnwaeA_MNbJqwc47UhA7UhIAFAAWJzxW2AAaM26dXgAgAEBigEAkgEDVVNEmAEBoAEBqAEBsAEAuAEDwAEAyAEC0AEA2AEA4AEA8AEAigI8dWYoJ2EnLCAyNTI5ODg1LCAxNTc3NDUxOTg4KTsBHTByJywgMTQ5NDE4NjcxNh8A8P2SArkCIWREMGtXZ2lta184UEVLX2xuMGNZQUNDYzhWc3dBRGdBUUFSSTdVaFExc21yQjFnQVlJSUNhQUJ3QUhnQWdBSElBb2dCN3VZQ2tBRUFtQUVBb0FFQnFBRURzQUVBdVFIdEJLRDJBQUF1UU1FQjdRU2c5Z0FBTGtESkFhSFRjUzNjWS1VXzJRRUFBQUFBQUFEd1AtQUJBUFVCQUFBQUFKZ0NBS0FDQUxVQ0FBQUFBTDBDQUFBQUFPQUNBT2dDQVBnQ0FJQURBWmdEQWFnRHBwUF9EN29EQ1ZOSlRqTTZORGN6TmVBRHJoaUlCQUNRQkFDWUJBSEJCQUFBQQ1yCHlRUQ0KJEFBQU5nRUFQRUUBCwkBMEQ0QkFDSUJmOGtxUVUJE0RBRHdQdy4umgKJASFEUTg2Q0E2PQEkblBGYklBUW9BRBVIVHVRRG9KVTBsT016bzBOek0xUUs0WVMReAxQQV9VEQwMQUFBVx0MAFkdDABhHQwAYx0M8GVlQUEu2AIA4AKtmEjqAmBodHRwOi8vdGVzdC5sb2NhbGhvc3Q6OTk5OS9pbnRlZ3JhdGlvbkV4YW1wbGVzL2xvbmdmb3JtL2Jhc2ljX3dfY3VzdG9tX2Fkc2VydmVyX3RyYW5zbGEBNfDXLmh0bWyAAwCIAwGQAwCYAxegAwGqAwDAA-CoAcgDANgDAOADAOgDAPgDAYAEAJIEDS91dC92My9wcmViaWSYBACiBAsxMC43NS43NC42OagEq8YEsgQSCAEQAhiABSDgAygBKAIwADgDuAQAwAQAyAQA0gQOOTMyNSNTSU4zOjQ3MzXaBAIIAOAEAPAEr-WfR4gFAZgFAKAF____________AcAFAMkFAAAAAAAA8D_SBQkJAAAAAAAAAADYBQHgBQHwBeBY-gUECAAQAJAGAZgGALgGAMEGBSEsAPC_0Ab1L9oGFgoQCREZAVAQABgA4AYE8gYCCACABwGIBwCgB0A.&s=95047e919846faea401c778106fb33dae0c95b02',
          'timeout_ms': 0,
          'ad_profile_id': 1182765,
          'rtb_video_fallback': false,
          'ads': [{
            'content_source': 'rtb',
            'ad_type': 'video',
            'notify_url': 'http://sin3-ib.adnxs.com/vast_track/v2?info=ZwAAAAMArgAFAQnUAQZeAAAAABGjWHMEV3HDORnUAQZeAAAAACCv5Z9HKAAw7Ug47UhA0-hISLuv1AFQ1smrB1jgWGICLS1oAXABeACAAQGIAQGQAYAFmAHgA6ABAKgBr-WfR7ABAQ..&s=50350aadc603f4bb6c59888515d60e9182da0eb8&event_type=1',
            'usersync_url': 'http%3A%2F%2Facdn.adnxs.com%2Fdmp%2Fasync_usersync.html',
            'buyer_member_id': 9325,
            'advertiser_id': 2529885,
            'creative_id': 149418671,
            'media_type_id': 4,
            'media_subtype_id': 64,
            'cpm': 15.000010,
            'cpm_publisher_currency': 15.000010,
            'publisher_currency_code': '$',
            'brand_category_id': 30,
            'client_initiated_ad_counting': true,
            'rtb': {
              'video': {
                'player_width': 640,
                'player_height': 480,
                'duration_ms': 30000,
                'playback_methods': ['auto_play_sound_on'],
                'frameworks': ['vpaid_1_0', 'vpaid_2_0'],
                'asset_url': 'http://sin3-ib.adnxs.com/ab?ro=1&an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Flongform%2Fbasic_w_custom_adserver_translation.html&e=wqT_3QL9COh9BAAAAwDWAAUBCNSDmPAFEKOxzaPwqtzhORiq5MnUovf28WEqNgmOWItPAQAuQBGOWItPAQAuQBkAAAECCOA_IREbACkRCQAxARm4AADgPzDWyasHOO1IQO1ISAJQr-WfR1ic8VtgAGjNunV41rgFgAEBigEDVVNEkgEBBvBVmAEBoAEBqAEBsAEAuAEDwAEEyAEC0AEA2AEA4AEA8AEAigI8dWYoJ2EnLCAyNTI5ODg1LCAxNTc3NDUxOTg4KTt1ZigncicsIDE0OTQxODY3MSwgMTUZH_D9kgK5AiFkRDBrV2dpbWtfOFBFS19sbjBjWUFDQ2M4VnN3QURnQVFBUkk3VWhRMXNtckIxZ0FZSUlDYUFCd0FIZ0FnQUhJQW9nQjd1WUNrQUVBbUFFQW9BRUJxQUVEc0FFQXVRSHRCS0QyQUFBdVFNRUI3UVNnOWdBQUxrREpBYUhUY1MzY1ktVV8yUUVBQUFBQUFBRHdQLUFCQVBVQkFBQUFBSmdDQUtBQ0FMVUNBQUFBQUwwQ0FBQUFBT0FDQU9nQ0FQZ0NBSUFEQVpnREFhZ0RwcFBfRDdvRENWTkpUak02TkRjek5lQURyaGlJQkFDUUJBQ1lCQUhCQkFBQUENcgh5UVENCiRBQUFOZ0VBUEVFAQsJATBENEJBQ0lCZjhrcVFVCRNEQUR3UHcuLpoCiQEhRFE4NkNBNj0BJG5QRmJJQVFvQUQVSFR1UURvSlUwbE9Nem8wTnpNMVFLNFlTEXgMUEFfVREMDEFBQVcdDABZHQwAYR0MAGMdDPBlZUFBLtgCAOACrZhI6gJgaHR0cDovL3Rlc3QubG9jYWxob3N0Ojk5OTkvaW50ZWdyYXRpb25FeGFtcGxlcy9sb25nZm9ybS9iYXNpY193X2N1c3RvbV9hZHNlcnZlcl90cmFuc2xhATV8Lmh0bWzyAhMKD0NVU1RPTV9NT0RFTF9JRBIA8gIaChYyFgAgTEVBRl9OQU1FAR0IHgoaNh0ACEFTVAE-8J9JRklFRBIAgAMAiAMBkAMAmAMXoAMBqgMAwAPgqAHIAwDYAwDgAwDoAwD4AwGABACSBA0vdXQvdjMvcHJlYmlkmAQAogQLMTAuNzUuNzQuNjmoBKvGBLIEEggBEAIYgAUg4AMoASgCMAA4A7gEAMAEAMgEANIEDjkzMjUjU0lOMzo0NzM12gQCCAHgBADwBK_ln0eIBQGYBQCgBf______AQUUAcAFAMkFacMU8D_SBQkJCQx0AADYBQHgBQHwBeBY-gUECAAQAJAGAZgGALgGAMEGCSQo8D_QBvUv2gYWChAJERkBUBAAGADgBgTyBgIIAIAHAYgHAKAHQA..&s=82c42e6aa09e7c842254552ae524791fa3693bbb'
              }
            }
          }]
        }, {
          'uuid': '285a2f41615348',
          'tag_id': 15394006,
          'auction_id': '1076114531988487576',
          'nobid': false,
          'no_ad_url': 'http://sin3-ib.adnxs.com/it?an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Flongform%2Fbasic_w_custom_adserver_translation.html&e=wqT_3QKiCKAiBAAAAwDWAAUBCNSDmPAFEJj7vIbyjsj3Dhiq5MnUovf28WEqNgkAAAkCABEJBwgAABkJCQjgPyEJCQgAACkRCQAxCQnwaeA_MNbJqwc47UhA7UhIAFAAWJzxW2AAaM26dXgAgAEBigEAkgEDVVNEmAEBoAEBqAEBsAEAuAEDwAEAyAEC0AEA2AEA4AEA8AEAigI8dWYoJ2EnLCAyNTI5ODg1LCAxNTc3NDUxOTg4KTsBHTByJywgMTQ5NDE3NjY5Nh8A8P2SArkCIVRqMWVUZ2lsa184UEVNWGRuMGNZQUNDYzhWc3dBRGdBUUFSSTdVaFExc21yQjFnQVlJSUNhQUJ3QUhnQWdBSElBb2dCN3VZQ2tBRUFtQUVBb0FFQnFBRURzQUVBdVFIenJXcWtBQUFrUU1FQjg2MXFwQUFBSkVESkFZOUNHX2M3MHRvXzJRRUFBQUFBQUFEd1AtQUJBUFVCQUFBQUFKZ0NBS0FDQUxVQ0FBQUFBTDBDQUFBQUFPQUNBT2dDQVBnQ0FJQURBWmdEQWFnRHBaUF9EN29EQ1ZOSlRqTTZORGN6TmVBRHJoaUlCQUNRQkFDWUJBSEJCQUFBQQ1yCHlRUQ0KJEFBQU5nRUFQRUUBCwkBMEQ0QkFDSUJmOGtxUVUJE0BBRHdQdy4umgKJASFFQThNQzo9ASRuUEZiSUFRb0FEFUhUa1FEb0pVMGxPTXpvME56TTFRSzRZUxF4DFBBX1URDAxBQUFXHQwAWR0MAGEdDABjHQzwZWVBQS7YAgDgAq2YSOoCYGh0dHA6Ly90ZXN0LmxvY2FsaG9zdDo5OTk5L2ludGVncmF0aW9uRXhhbXBsZXMvbG9uZ2Zvcm0vYmFzaWNfd19jdXN0b21fYWRzZXJ2ZXJfdHJhbnNsYQE18O0uaHRtbIADAIgDAZADAJgDF6ADAaoDAMAD4KgByAMA2AMA4AMA6AMA-AMBgAQAkgQNL3V0L3YzL3ByZWJpZJgEAKIECzEwLjc1Ljc0LjY5qASrxgSyBBIIARACGIAFIOADKAEoAjAAOAO4BADABADIBADSBA45MzI1I1NJTjM6NDczNdoEAggA4AQA8ATF3Z9HiAUBmAUAoAX___________8BwAUAyQUAAAAAAADwP9IFCQkAAAAAAAAAANgFAeAFAfAFwvIX-gUECAAQAJAGAZgGALgGAMEGAAAAAAAA8L_QBvUv2gYWChAAAAAABTcNAVAQABgA4AYE8gYCCACABwGIBwCgB0A.&s=c49afba7ca4b5193f7da37b17e1fbfbee2328f61',
          'timeout_ms': 0,
          'ad_profile_id': 1182765,
          'rtb_video_fallback': false,
          'ads': [{
            'content_source': 'rtb',
            'ad_type': 'video',
            'notify_url': 'http://sin3-ib.adnxs.com/vast_track/v2?info=aAAAAAMArgAFAQnUAQZeAAAAABGYPc8gdyDvDhnUAQZeAAAAACDF3Z9HKAAw7Ug47UhA0-hISLuv1AFQ1smrB1jC8hdiAi0taAFwAXgAgAEBiAEBkAGABZgB4AOgAQCoAcXdn0ewAQE.&s=47618eb9096567900e84fd1c6aff09d753b2fe91&event_type=1',
            'usersync_url': 'http%3A%2F%2Facdn.adnxs.com%2Fdmp%2Fasync_usersync.html',
            'buyer_member_id': 9325,
            'advertiser_id': 2529885,
            'creative_id': 149417669,
            'media_type_id': 4,
            'media_subtype_id': 64,
            'cpm': 10.000000,
            'cpm_publisher_currency': 10.000000,
            'publisher_currency_code': '$',
            'brand_category_id': 4,
            'client_initiated_ad_counting': true,
            'rtb': {
              'video': {
                'player_width': 640,
                'player_height': 480,
                'duration_ms': 30000,
                'playback_methods': ['auto_play_sound_on'],
                'frameworks': ['vpaid_1_0', 'vpaid_2_0'],
                'asset_url': 'http://sin3-ib.adnxs.com/ab?ro=1&an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Flongform%2Fbasic_w_custom_adserver_translation.html&e=wqT_3QL-CKB-BAAAAwDWAAUBCNSDmPAFEJj7vIbyjsj3Dhiq5MnUovf28WEqNgkAAAECCCRAEQEHEAAAJEAZCQkI4D8hCQkIJEApEQkAMQkJsOA_MNbJqwc47UhA7UhIAlDF3Z9HWJzxW2AAaM26dXjWuAWAAQGKAQNVU0SSAQEG8FWYAQGgAQGoAQGwAQC4AQPAAQTIAQLQAQDYAQDgAQDwAQCKAjx1ZignYScsIDI1Mjk4ODUsIDE1Nzc0NTE5ODgpO3VmKCdyJywgMTQ5NDE3NjY5LCAxNRkf8P2SArkCIVRqMWVUZ2lsa184UEVNWGRuMGNZQUNDYzhWc3dBRGdBUUFSSTdVaFExc21yQjFnQVlJSUNhQUJ3QUhnQWdBSElBb2dCN3VZQ2tBRUFtQUVBb0FFQnFBRURzQUVBdVFIenJXcWtBQUFrUU1FQjg2MXFwQUFBSkVESkFZOUNHX2M3MHRvXzJRRUFBQUFBQUFEd1AtQUJBUFVCQUFBQUFKZ0NBS0FDQUxVQ0FBQUFBTDBDQUFBQUFPQUNBT2dDQVBnQ0FJQURBWmdEQWFnRHBaUF9EN29EQ1ZOSlRqTTZORGN6TmVBRHJoaUlCQUNRQkFDWUJBSEJCQUFBQQ1yCHlRUQ0KJEFBQU5nRUFQRUUBCwkBMEQ0QkFDSUJmOGtxUVUJE0BBRHdQdy4umgKJASFFQThNQzo9ASRuUEZiSUFRb0FEFUhUa1FEb0pVMGxPTXpvME56TTFRSzRZUxF4DFBBX1URDAxBQUFXHQwAWR0MAGEdDABjHQzwZWVBQS7YAgDgAq2YSOoCYGh0dHA6Ly90ZXN0LmxvY2FsaG9zdDo5OTk5L2ludGVncmF0aW9uRXhhbXBsZXMvbG9uZ2Zvcm0vYmFzaWNfd19jdXN0b21fYWRzZXJ2ZXJfdHJhbnNsYQE1fC5odG1s8gITCg9DVVNUT01fTU9ERUxfSUQSAPICGgoWMhYAIExFQUZfTkFNRQEdCB4KGjYdAAhBU1QBPvCfSUZJRUQSAIADAIgDAZADAJgDF6ADAaoDAMAD4KgByAMA2AMA4AMA6AMA-AMBgAQAkgQNL3V0L3YzL3ByZWJpZJgEAKIECzEwLjc1Ljc0LjY5qASrxgSyBBIIARACGIAFIOADKAEoAjAAOAO4BADABADIBADSBA45MzI1I1NJTjM6NDczNdoEAggB4AQA8ATF3Z9HiAUBmAUAoAX______wEFFAHABQDJBWnDFPA_0gUJCQkMeAAA2AUB4AUB8AXC8hf6BQQIABAAkAYBmAYAuAYAwQYJJSjwP9AG9S_aBhYKEAkRGQFQEAAYAOAGBPIGAggAgAcBiAcAoAdA&s=72d1ec3db5baaa29c1b0e5f07c012db606675fe5'
              }
            }
          }]
        }, {
          'uuid': '285a2f41615348',
          'tag_id': 15394006,
          'auction_id': '7495588537924508785',
          'nobid': true,
          'ad_profile_id': 1182765
        }]
      }
    }
  }
}
